import { useDispatch, useSelector } from "react-redux";
import TextAreaTyping from "../components/TextAreaTyping";
import TextDisplay from "../components/TextDisplay";
import Timer from "../components/Timer";
import SpeedStats from "../components/SpeedStats";
import { Button } from "flowbite-react";
import { useEffect } from "react";
import {
  updateTypedChars,
  startTest,
  updateTimeLeft,
  submitTest,
  resetTest,
} from "../redux/features/TypingTestSlice.js";

const Typing = () => {
  const dispatch = useDispatch();
  const {
    text,
    currentIndex,
    timeLeft,
    isStarted,
    typedChar,
    wpm,
    accuracy,
    isSubmitted,
  } = useSelector((state) => state.typingTest);

  // เคลียร์ TextArea เมื่อรีเฟรชหน้า
  useEffect(() => {
    dispatch(resetTest());
  }, [dispatch]);

  // ทำให้เวลาลดลงอย่างต่อเนื่องทุกวินาที
  useEffect(() => {
    if (isStarted && timeLeft > 0) {
      const interval = setInterval(() => {
        dispatch(updateTimeLeft(timeLeft - 1));
      }, 1000);

      return () => clearInterval(interval); // เคลียร์ interval เมื่อ component ถูก unmount หรือ state เปลี่ยนแปลง
    }
  }, [isStarted, timeLeft, dispatch]);

  const handleType = (value) => {
    if (!isStarted) dispatch(startTest());
    dispatch(updateTypedChars(value));
  };

  const handleTimeup = (newTimeLeft) => {
    dispatch(updateTimeLeft(newTimeLeft));
  };

  const handleSubmit = () => {
    dispatch(submitTest());
  };

  const handleReset = () => {
    dispatch(resetTest());
  };

  return (
    <div className="mt-8 space-x-4 px-4">
      <h2 className="text-3xl font-semibold text-blue-600">
        Typing Speed Test
      </h2>
      <div className="py-4">
        <TextDisplay text={text} currentIndex={currentIndex} />
      </div>
      <TextAreaTyping
        onType={handleType}
        value={typedChar}
        isDisable={isSubmitted}
      />
      <Timer timeLeft={timeLeft} onTimeUp={handleTimeup} />

      {isSubmitted && <SpeedStats wpm={wpm} accuracy={accuracy} />}

      <div className="flex gap-5 mt-4">
        <Button color="blue" onClick={handleSubmit}>
          Submit Test
        </Button>
        <Button color="dark" onClick={handleReset}>
          Reset Test
        </Button>
      </div>
    </div>
  );
};

export default Typing;
