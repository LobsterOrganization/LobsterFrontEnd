import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrends } from "./actions/trends.actions.js";
import { getSentiment } from "./actions/sentiments.actions.js";
import { getTheme } from "./actions/themes.actions";
import { getActors } from "./actions/actors.actions.js";


import Routes from "./components/routes"

const App = () => {
  const trends = useSelector((state) => state.trends);
  const sentiments = useSelector((state) => state.sentiments);
  const themes = useSelector((state) => state.themes);
  const actors = useSelector((state) => state.actors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrends());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSentiment());
  }, [dispatch]);


  useEffect(() => {
    dispatch(getTheme());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActors());
  }, [dispatch]);

  return (
    <div>
      <Routes />
    </div>
  );
};

export default App;