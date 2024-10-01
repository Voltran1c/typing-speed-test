import React from "react";
import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

const WorkTimeline = () => {
  return (
    <div className="mt-8 px-4">
      <h2 className="text-3xl font-bold text-blue-600 uppercase">workflow</h2>
      <Timeline className="pt-4">
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>October 2024</Timeline.Time>
            <Timeline.Title>Main Objectives</Timeline.Title>
            <Timeline.Body>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Application Development:</strong> Test users typing
                  speed (WPM) and accuracy (% Accuracy).
                </li>
                <li>
                  <strong>Real-time Testing:</strong> Support real-time typing
                  tests and display statistics upon completion.
                </li>
                <li>
                  <strong>Reset Functionality:</strong> Allow users to reset or
                  start a new test when the refresh button is clicked.
                </li>
              </ul>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>October 2024</Timeline.Time>
            <Timeline.Title>Purpose</Timeline.Title>
            <Timeline.Body>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Measure Performance:</strong> Enable users to measure
                  their typing speed and accuracy.
                </li>
                <li>
                  <strong>Test Control:</strong> Support starting and stopping
                  the test when the time runs out or the submit button is
                  clicked.
                </li>
                <li>
                  <strong>Easy Reset:</strong> Easily reset data and start a new
                  test seamlessly.
                </li>
              </ul>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>October 2024</Timeline.Time>
            <Timeline.Title>System Structure</Timeline.Title>
            <Timeline.Body>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Frontend Development:</strong> Built using React and
                  Tailwind CSS for UI development and design.
                </li>
                <li>
                  <strong>State Management:</strong> Redux Toolkit is used for
                  managing the state of the typing test, such as time remaining
                  and WPM.
                </li>
                <li>
                  <strong>Key Components:</strong> Main components include
                  TextDisplay, TextAreaTyping, Timer, and SpeedStats.
                </li>
              </ul>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default WorkTimeline;
