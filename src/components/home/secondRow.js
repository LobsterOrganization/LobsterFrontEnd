import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";


import Graph from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function makeRandomColor() {
  var c = "";
  while (c.length < 7) {
    c += Math.random().toString(16).substr(-6).substr(-1);
  }
  return "#" + c;
}

const LoadGraph = () => {

  const actors = useSelector((state) => state.actorsReducer);
  const [Utilisateur_name, setUtilisateur_name] = useState([]);
  const [Score, setScore] = useState([]);

  const loadGraph = useLoadGraph();

  useEffect(() => {
    if (actors) {
      const newUtilisateur= [];
      const newScore = [];
      Object.keys(actors).map(key => {
        newUtilisateur.push(actors[key].Utilisateur_name);
        newScore.push(actors[key].Score);

      });
  
      setUtilisateur_name(newUtilisateur);
      console.log("LALAASARARAAHHHHHHH", newScore);
      setScore(newScore);
    }
  }, [actors]);

  var nodeData = useSelector((state) => state.actorsReducer);
   // Data get by redux
   console.log("SSAAARAHHHSHDH", nodeData);
  useEffect(() => {
    const graph = new Graph();

    for (const key of Object.keys(nodeData)) {
        //x: getRandomInt(10),
        //y: getRandomInt(10),
      graph.addNode(`${nodeData[key].Utilisateur_name}`, {
        x: getRandomInt(90000000),
        y: getRandomInt(90000000),
        size: `${nodeData[key].Score}`/3000,
        label: `${nodeData[key].Utilisateur_name}`,
        color: makeRandomColor(),
      });
    }

    // graph.addEdge("first", "sec");

    loadGraph(graph);
  }, [loadGraph, nodeData]);

  return null;
};

const SecondRow = () => {
  return (
    <div className="page-content p-2" id="content">
      <div className="row">
        <div className="col-lg-12">
          <SigmaContainer
            className="containerSigma"
            style={{
              height: "900px",
              width: "100%",
              border: "0.5px solid #aaa",
              margin: "0",
            }}
          >
            <LoadGraph />
          </SigmaContainer>
        </div>
      </div>
    </div>
  );
};

export default SecondRow;
