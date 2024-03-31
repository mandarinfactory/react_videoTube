import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  RootState,
  SearchInputSlice,
  VideoScreenIsClickedSlice,
  store,
} from "../../store/store";
import { getClickedSidebar } from "../../store/reducers/getClickedSidebar";
import { ClickedButtonPageSlice } from "../../store/store";

import 침착맨 from "../../assets/침착맨.webp";
import hahaha from "../../assets/haha ha.webp";
import 슈카월드 from "../../assets/슈카월드.webp";
import { getSearchVideos } from "../../store/reducers/getSearchVideos";

const SubSidebar: React.FC = () => {
  const dispatch = useDispatch();
  const searchedSelector = useSelector((state: RootState) => {
    return state.youtubeSearchInputApp.searchVal?.etag;
  });
  const storeToDispatch = (value: string) => {
    store.dispatch(
      getClickedSidebar(ClickedButtonPageSlice.actions.clickedSuccess(value))
    );
    dispatch(VideoScreenIsClickedSlice.actions.isClicked(0));
  };
  const searchedInputValHandler = (replace: string) => {
    if (searchedSelector) {
      store.dispatch(
        getSearchVideos(SearchInputSlice.actions.searchSuccess(replace))
      );
    }
  };
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col justify-center items-center my-7 hover:fill-sky-800 hover:text-sky-800 dark:fill-slate-50 dark:hover:fill-sky-400 dark:hover:text-sky-400 cursor-pointer"
        onClick={() => {
          storeToDispatch("무한도전");
          searchedInputValHandler("무한도전");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="25"
          viewBox="0 0 92.604164 67.714283"
        >
          <path
            d="m83.549 44.578-.093-3.653c-.017-7.695-.5-15.635-6.099-20.736C66.875 10.852 52.204 9.286 40.731 9.61c-4.604-.24-9.178 0-12.745.382-3.504.375-8.706.757-13.601 2.91-3.648 1.606-6.646 5.452-9.051 8.906C.196 29.25.284 40.133 1.126 49.804c.47 5.4 1.01 5.318 1.595 7.694.865 3.114 1.517 5.803 4.74 7.522 1.778.948 3.81 1.49 5.778.883 2.877-.28 5.774-4.268 8.107-6.799.81-.878 1.462-.86 2.23-1.614 3.567-2.845 7.239-2.208 10.83-2.706l2.208.097 3.558-.194 6.593.101c4 .09 6.538-.066 10.402 3.582 2.98 2.843 7.372 8.558 12.218 8.683 8.25.847 10.712-5.989 12.2-11.233 1.059-3.71 2.102-7.448 1.964-11.242z"
            className="fill:#fff"
            transform="scale(.998)"
          />
          <path
            d="m87.138 41.047-.092-3.652c-.018-7.696-.5-15.636-6.1-20.736C70.465 7.32 55.795 5.755 44.32 6.077c-4.604-.24-9.178.001-12.745.383-3.503.375-8.706.758-13.6 2.91-3.649 1.607-7.193 4.54-9.599 7.995-5.137 7.442-5.231 19.146-4.39 28.817.47 5.4.828 5.591 1.413 7.968.865 3.114 2.337 6.532 5.561 8.25 1.777.948 4.538 1.035 6.507.428 2.535-4.846 6.414-7.43 9.243-8.048 3.566-2.845 8.515-2.3 12.107-2.798l1.387.007 3.466-.013 6.866.01c4 .09 5.9-.065 9.765 3.582 2.98 2.844 7.189 8.558 12.035 8.684 8.25.847 12.535-6.536 14.024-11.781 1.059-3.71.916-7.63.778-11.424z"
            className="fill:#e7e8da"
            transform="scale(.998)"
          />
          <path
            d="M20.3 31.27h1.702v-1.587h-1.701Zm3.887-3.694v5.802h-6.07v-5.802zm-8.355 9.522v-2.134h10.64v2.134h-4.19v2.133h-2.235v-2.133h-4.215M38.383 39.272h-2.277v-6.92h2.277v2.42h1.94v2.132h-1.94zm-6.054 6.14V40.26h2.277v3.018h3.933v2.132zm.078-8.69c.207-.207.31-.459.31-.753 0-.295-.103-.547-.31-.755a1.02 1.02 0 0 0-.75-.312 1.02 1.02 0 0 0-.75.312c-.207.208-.31.46-.31.755 0 .294.102.546.31.754.206.208.457.312.75.312s.543-.104.75-.312zm1.591-3.043c.647.625.97 1.388.97 2.29 0 .884-.323 1.639-.97 2.263-.646.624-1.427.936-2.34.936a3.22 3.22 0 0 1-2.317-.936c-.646-.624-.97-1.38-.97-2.263 0-.902.324-1.665.97-2.29a3.22 3.22 0 0 1 2.316-.936c.914 0 1.695.312 2.341.936zm-3.557-5.177h2.431v1.665h2.2v2.107h-6.881v-2.107h2.25v-1.665M43.553 33.372v-5.724h6.324v2.126h-4.089v1.47h4.089v2.128H47.87v1.654h4.216v2.153h-10.64v-2.153h4.19v-1.654h-2.083M60.252 36.873v-2.12h1.887v-2.406h2.27v6.88h-2.27v-2.354zm-1.888 8.458v-5.12h2.245v3h3.876v2.12zm-3.189-6.388-1.76-1.19 2.245-3.259h-1.836v-2.043h6.453v2.043H58.44l2.193 3.181-1.709 1.216-1.837-2.742-1.913 2.794"
            className="fill:#7f7377"
            transform="scale(.998)"
          />
          <path
            d="m81.66 49.578-.067 1.441c-.098 1.63-.4 2.92-.74 4.149-.029.145-.07.286-.116.426l-.185.585-.276.742c-1.413 4.05-4.68 8.148-8.606 8.867-5.846.537-8.361-2.4-11.498-5.785-2.23-3.128-6.758-6.86-13.111-6.487l-6.903-.01-3.458.012-1.373-.007c-4.489-.032-9.762.024-13.707 3.429-.934.807-1.03 1.012-1.872 1.876-2.013 2.069-3.657 4.882-6.349 5.712-1.463.451-3.825.12-5.137-.579-2.364-1.334-3.714-4.067-4.624-7.038l-.256-.819-.123-.475-.155-.594-.25-1.03-.134-.597-.17-1.205a51.12 51.12 0 0 1-.367-6.202l-.046-.61-.045-.814-.033-.61c-.108-2.2.024-4.398.1-6.596l.057-.614.212-1.866.09-.614.181-1.373.25-1.357.242-1.149c.15-.924.408-1.754.67-2.54l.318-.894.26-.725.172-.426.29-.644.226-.493.309-.61c.104-.204.206-.41.315-.611l.354-.61c.318-.544.477-.821.836-1.338.282-.405.577-.798.882-1.18l.425-.497.503-.587.437-.448.62-.626.467-.417c1.553-1.386 2.505-1.919 4.365-2.737 1.04-.457 2.87-1.111 3.92-1.458l3.46-.767c2.254-.306 2.98-.34 4.965-.62 1.455-.156 4.193-.372 5.808-.42h5.05c.658.022 1.326-.036 2.012 0 3.396.176 7.854.021 11.345.424l4.19.575c9.157 1.671 15.289 3.82 20.687 8.792 4.094 6.86 5.373 12.584 5.416 19.315l.01.338.015.612.015.65.016.61.019.747.015.613.003.144.007.202.021.614.005.144.019.61.021.84.012.612v1.389zM54.737 12.633l-2.908-.399Zm28.813 31.945-.093-3.653c-.437-7.61-1.102-15.455-6.099-20.736C66.875 10.852 52.204 9.286 40.731 9.61c-4.604-.24-9.178 0-12.745.382-3.504.375-8.706.757-13.601 2.91-3.648 1.606-7.193 4.54-9.598 7.995C-.351 28.338-.445 40.042.397 49.713c.47 5.4.827 5.591 1.412 7.967.865 3.114 2.337 6.532 5.562 8.251 1.777.948 4.537 1.035 6.507.428 3.444-.849 5.5-4.268 7.833-6.799.81-.878.642-.496 1.41-1.25 3.566-2.844 8.514-2.299 12.106-2.797l1.387.006 3.467-.012 6.866.01c4 .09 5.9-.065 9.764 3.582 2.98 2.844 7.19 8.558 12.036 8.684 8.25.846 12.535-6.536 14.023-11.781 1.06-3.71.917-7.63.779-11.424zM2.066 40.902c.058.675.058.675 0 0"
            className="fill:#7f7377"
            transform="scale(.998)"
          />
          <path
            d="M69.849 12.636c-.882-.057-2.095 1.167-2.105 2.092-.118.793.7 2.07 1.5 2.078.914.043 2.252-1.619 2.246-2.57-.025-.705-.888-1.585-1.641-1.6zm15.647 5.826c-.895.011-1.907 1.303-1.923 2.212.029.697.556 1.977 1.325 1.997.858 0 2.268-1.247 2.309-2.235-.037-.694-.947-1.956-1.711-1.974zM79.093 5.62l.94-4.434 2.646 2.811 4.035-2.514-.136 4.51 3.826-.187-2.954 3.472c-3.03-2.456-5.125-3.002-8.357-3.657Z"
            className="fill:#fff"
            transform="scale(.998)"
          />
          <path
            d="M74.29 38.75c-1.164-.272-2.37-.879-3.03-1.851-.87-1.346-.991-2.983-.125-3.798.837-.804 1.712-.929 2.774-.852 1.733.227 2.868 1.88 2.89 3.501-.018 1.141-.515 2.123-1.5 2.65-.38.196-.834.354-1.01.35zm-5.633-2.701c-.104 0-.366-.178-.582-.394-.217-.216-.554-.777-.75-1.245-1.225-3.006-.249-6.32 2.784-7.669.544-.586 5.688-1.143 5.532-2.181-.08-.208-.673-.814-1.15-1.178-1.24-.852-2.668-.832-3.998-.174-1.454.474-3.507 3.265-4.882 3.187-.266-.037-.898-.659-1.403-1.383-1.403-2.014-2.013-4.65-2.012-6.68-.036-2.355.602-4.641 1.82-6.54 2.197-3.25 5.482-5.578 9.338-6.389.203-.041 1.313-.084 2.466-.094l2.097-.02.306-1.61c.168-.886.498-2.02.733-2.522.306-.652.607-.932 1.057-.985.464-.054.944.22 1.825 1.04l1.195 1.113 1.16-.834c.638-.458 1.506-1.013 1.93-1.231.569-.295.893-.333 1.243-.145.26.14.546.484.636.766.09.281.084 1.29-.012 2.24l-.174 1.73.962-.163c.529-.09 1.264-.048 1.633.093.37.14.74.433.824.65.083.218-.016.746-.22 1.173-.204.428-.883 1.346-1.509 2.041-1.014 1.127-1.095 1.3-.745 1.59.216.179.832.973 1.37 1.763 1.666 2.488 2.626 5.355 2.658 8.307.003.883-.2 2.341-.45 3.24-1.062 3.809-3.988 6.37-7.677 7.421-.738.206-2.45.445-3.803.53-2.99.463-6.178-.97-8.692-.236-1.228.466-2.707 1.427-2.75 2.865 0 .368-.129.952-.286 1.297-.157.345-.37.627-.475.627zm16.282-13.78c.858 0 1.744-.965 1.785-1.954-.037-.694-.344-1.473-1.107-1.491-.895.011-1.666.941-1.682 1.85.03.696.235 1.575 1.004 1.595zm-15.654-5.906c.914.043 1.729-1.095 1.722-2.047-.025-.705-.404-1.383-1.158-1.398-.881-.058-1.652.925-1.662 1.85-.118.793.298 1.588 1.098 1.595zM87.291 8.73c.155.003.736-.519 1.292-1.159.557-.64 1.012-1.256 1.012-1.369 0-.112-.526-.132-1.169-.045-.643.087-1.38.218-1.636.29-.446.124-.46.011-.294-2.396l.174-2.527-.69.447c-.38.245-1.348.948-2.151 1.562-.803.615-1.5 1-1.548.855-.048-.144-.412-.775-.81-1.402-.398-.628-.873-1.14-1.056-1.14-.197 0-.45.506-.62 1.248-.16.687-.289 1.548-.289 1.913 0 .602.126.692 1.348.977.741.172 1.932.551 2.645.843.714.291 1.796.838 2.405 1.214.609.377 1.233.687 1.387.69zM65.234 7.423c-.203.026-1.061-.287-1.907-.695-.846-.41-1.478-.786-1.478-.96 0-.175.164-.674.364-.84.295-.244.612-.037 1.926.578 1.373.642 1.61.845 1.543 1.315-.043.305-.245.577-.448.602zm1.843-1.941c-.367.051-.847-.437-1.916-1.946-.874-1.233-1.52-2.133-1.474-2.449.041-.29.435-.635.667-.635.237 0 .998.931 1.856 2.12.826 1.143 1.47 2.25 1.43 2.46-.04.21-.294.412-.563.45zM69.43 4.06c-.311 0-.544-.207-.626-.554-.073-.305-.158-1.107-.19-1.784-.055-1.163-.044-1.35.536-1.35.561 0 .65.242.835 1.563.11.794.143 1.596.07 1.784-.071.187-.353.34-.625.34z"
            className="fill:#7f7377"
            transform="scale(.998)"
          />
        </svg>
        <h1 className="md:hidden sm:hidden">무한도전</h1>
      </div>
      <div
        className="flex flex-col justify-center items-center mb-7 hover:text-sky-800 dark:hover:text-sky-400 cursor-pointer"
        onClick={() => {
          storeToDispatch("침착맨");
          searchedInputValHandler("침착맨");
        }}
      >
        <img className="w-10 h-10 rounded-full" src={침착맨} alt="" />
        <h1 className="md:hidden sm:hidden">침착맨</h1>
      </div>
      <div
        className="flex flex-col justify-center items-center mb-7 hover:text-sky-800 dark:hover:text-sky-400 cursor-pointer"
        onClick={() => {
          storeToDispatch("haha ha");
          searchedInputValHandler("haha ha");
        }}
      >
        <img className="w-10 h-10 rounded-full" src={hahaha} alt="" />
        <h1 className="md:hidden sm:hidden">haha ha</h1>
      </div>
      <div
        className="flex flex-col justify-center items-center hover:text-sky-800 dark:hover:text-sky-400 cursor-pointer"
        onClick={() => {
          storeToDispatch("슈카월드");
          searchedInputValHandler("슈카월드");
        }}
      >
        <img
          className="w-10 h-10 rounded-full bg-blue-500"
          src={슈카월드}
          alt=""
        />
        <h1 className="md:hidden sm:hidden">슈카월드</h1>
      </div>
      <div className="w-[80%] h-1 my-7 mx-auto bg-slate-300"></div>
    </div>
  );
};

export default SubSidebar;