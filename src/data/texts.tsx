import { ExplanationBox } from "../common/ExplanationBox";
import React from "react";

export const texts = Object.freeze({
  playPage: {
    controlBar: {
      drawBackgroundButton:
        "Draw something that should be shown on the gridMap like spell effects, environment hazards etc.",
      drawNotesButton:
        "Open the notes pane where you can write some notes with a pen.",
      playButton: "Enter play mode, so you can move tokens.",
      addTokensButton: "Add a new token to the game board.",
      zoomButton: "Zoom in or out and change orientation of the map."
    }
  },
  newSessionPage: {
    headline: "Start New Session",
    explanation: (
      <>
        <strong>Sessions</strong> are the place where all token positions on the
        map and all drawings are stored.
        <br />
        You can switch between sessions on this screen so you can come back to a
        game later ...
      </>
    )
  },
  aboutPage: {
    headline: "Let me tell you tale about Gridheim, Friend ...",
    startLink: "Enough talk just start ..."
  },
  startPage: {
    headline: "Welcome to Gridheim, Friend!",
    about: {
      description: "TBD",
      button: "About"
    },
    openSource: {
      description: "TBD",
      button: "Open Source"
    },
    newGridMap: {
      description: "TBD",
      button: "Add Map"
    },
    newSession: {
      description: "TBD",
      button: "Start New Session"
    },
    play: {
      description: "TBD",
      button: "Start Session"
    },
    showGridMaps: {
      description: "TBD",
      button: "Show Maps"
    },
    showSessions: {
      description: "TBD",
      button: "Show Sessions"
    }
  }
});
