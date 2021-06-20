import { FetchNewsRequest, FetchNewsSuccess, FetchNewsFailure, SetAllData } from "store/FetchGlobal/FetchActions";
import { LogOut, LogSuccess, LogFailure } from "store/Log/LogActions";
import Cookies from "js-cookie";

const cookie = Cookies.get("token");

export const Fetch = (finalUrl, methodChoice) => {
  return (dispatch) => {
    console.log("start Fetch");
    dispatch(FetchNewsRequest(true));
    fetch(finalUrl, {
      method: methodChoice,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((element) => {
        if (element.status === "error") {
          dispatch(FetchNewsFailure(false, element.message));
        } else {
          dispatch(FetchNewsSuccess(true));
          dispatch(SetAllData(element));
          console.log("end fetch");
        }
      });
  };
};

export const FetchWithBearer = (finalUrl, methodChoice) => {
  return (dispatch) => {
    console.log("start FetchWithBearer");
    dispatch(FetchNewsRequest(true));
    fetch(finalUrl, {
      method: methodChoice,
      headers: {
        Authorization: `Bearer ${cookie}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((element) => {
        if (element.status === "error") {
          dispatch(FetchNewsFailure(false, element.message));
        } else {
          dispatch(FetchNewsSuccess(true));
          dispatch(SetAllData(element));
          console.log("end fetch");
        }
      });
  };
};

export const FetchWithBody = (finalUrl, methodChoice, data) => {
  return (dispatch) => {
    console.log("start FetchWithBody");
    dispatch(FetchNewsRequest(true));
    fetch(finalUrl, {
      method: methodChoice,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((element) => {
        if (element.status === "error") {
          dispatch(FetchNewsFailure(false, element.message));
        } else {
          dispatch(FetchNewsSuccess(true));
          dispatch(SetAllData(element));
          console.log("end fetch");
        }
      });
  };
};

export const FetchWithBodyWithBearer = (finalUrl, methodChoice, data) => {
  return (dispatch) => {
    console.log("start FetchWithBodyWithBearer");
    dispatch(FetchNewsRequest(true));
    fetch(finalUrl, {
      method: methodChoice,
      headers: {
        Authorization: `Bearer ${cookie}`,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((element) => {
        if (element.status === "error") {
          dispatch(FetchNewsFailure(false, element.message));
        } else {
          dispatch(FetchNewsSuccess(true));
          dispatch(SetAllData(element));
          console.log("end fetch");
        }
      });
  };
};
