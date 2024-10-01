import { createSlice } from "@reduxjs/toolkit";
import { getRandomText } from "../../utils/randomText";

const initialState = {
  text: getRandomText(),
  currentIndex: 0,
  timeLeft: 60,
  isStarted: false,
  typedChar: "",
  wpm: 0,
  accuracy: 100,
  isSubmitted: false,
};

const typingTestSlice = createSlice({
  name: "typingTest",
  initialState,
  reducers: {
    startTest: (state) => {
      state.isStarted = true;
      state.isSubmitted = false;
    },
    updateTypedChars: (state, action) => {
      state.typedChar = action.payload;
      state.currentIndex = action.payload.length;
    },
    updateTimeLeft: (state, action) => {
      state.timeLeft = action.payload;
      if (state.timeLeft === 0) {
        state.isStarted = false;
        state.isSubmitted = true;
        state.currentIndex = state.typedChar.length;
        typingTestSlice.caseReducers.calculateWpm(state);
        typingTestSlice.caseReducers.calculateAccuracy(state);
      }
    },

    calculateWpm: (state) => {
      const wordsTyped = state.typedChar.trim().split(/\s+/).length;
      const timeElapsed = 60 - state.timeLeft;
      if (timeElapsed > 0) {
        state.wpm = Math.round((wordsTyped / timeElapsed) * 60);
      } else {
        state.wpm = 0;
      }
    },
    calculateAccuracy: (state) => {
      const correctChars = state.typedChar
        .split("")
        .filter((char, index) => char === state.text[index]).length;
      const totalChars = state.typedChar.length;
      state.accuracy = totalChars
        ? Math.round((correctChars / totalChars) * 100)
        : 100;
    },
    submitTest: (state) => {
      state.isStarted = false;
      state.isSubmitted = true;
      typingTestSlice.caseReducers.calculateWpm(state);
      typingTestSlice.caseReducers.calculateAccuracy(state);
    },
    resetTest: (state) => {
      state.text = getRandomText();
      state.currentIndex = 0;
      state.timeLeft = 60;
      state.isStarted = false;
      state.typedChar = "";
      state.wpm = 0;
      state.accuracy = 100;
      state.isSubmitted = false;
    },
  },
});

export const {
  startTest,
  updateTypedChars,
  updateTimeLeft,
  calculateWpm,
  calculateAccuracy,
  submitTest,
  resetTest,
} = typingTestSlice.actions;

export default typingTestSlice.reducer;
