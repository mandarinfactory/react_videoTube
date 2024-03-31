import {
  videoInfosStart,
  videoInfosSuccess,
  videoInfosFailure,
} from "../store";
import { YOUTUBE_API_URL } from "../../utils/constants";
import { ReduxType } from "../../types/types";
import { Dispatch } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getVideoInfos =
  (videoValue: ReduxType) => async (dispatch: Dispatch) => {    
    try {
      dispatch(videoInfosStart());
      const response = await fetch(
        `${YOUTUBE_API_URL}/videos?key=${API_KEY}&part=snippet,contentDetails,statistics&id=${videoValue.payload}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      dispatch(videoInfosSuccess(data));
    } catch (error) {
      dispatch(videoInfosFailure(error));
    }
  };
