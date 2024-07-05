"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import Link from "next/link";

export function TabsDemo() {
  const tabs = [
    {
      title: "Next-JS",
      value: "Next-JS",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>My portfolio</p>
          <div className="text-base antialiased m-4">This portfolio website create using Next.js and Tailwind CSS and use ui.aceternity</div>
        </div>
      ),
    },
    {
      title: "React Native",
      value: "React Native",
      content: (
        <div className="w-full overflow-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>TikPik Game</p>
          <div className="text-base antialiased m-4">
            <strong className="text-lg mb-2"> Utilized Javascript and React Native for developing the game</strong>
            <ol className="list-decimal m-4">
              <li>
                <p>
                  <strong>Project Overview: </strong>
                </p>
                <ul className="list-disc">
                  <li>
                    Developed a roller dice game featuring multiple boxes with randomly assigned numbers from 1 to 10.
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <strong>Game Mechanics:</strong>
                </p>
                <ul className="list-disc">
                  <li>
                    Designed game logic where players select boxes with matching numbers and roll the dice until they achieve the same number in a box.
                  </li>
                  <li>
                    Implemented random number generation and logic for dice rolling
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <strong>Github Link: </strong>
                </p>
                <ul className="list-disc">
                  <li>
                    <Link href={"https://github.com/nishantnandeshwar/Tik"}>
                      Click here
                    </Link>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <p>Sudoku Game</p>
          <div className="text-base antialiased m-4">
            <strong className="text-lg mb-2"> Utilized Javascript and React Native for developing the game</strong>
            <ol className="list-decimal m-4">
              <li>
                <p>
                  <strong>Project Overview: </strong>
                </p>
                <ul className="list-disc">
                  <li>
                    To develop a fully functional Sudoku game that allows users to play, solve, and generate Sudoku puzzles. The project aims to provide an engaging and user-friendly interface, ensuring adherence to the rules of Sudoku.
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <strong>Game Mechanics and Representation:</strong>
                </p>
                <ul className="list-disc">
                  <li>
                    Designed game logic and 9x9 grid representation where players will be engaged to complete the task.
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <strong>Github Link: </strong>
                </p>
                <ul className="list-disc">
                  <li>
                    <Link href={"https://github.com/nishantnandeshwar/SudokuGame"}>
                      Click here
                    </Link>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      ),
    },
    {
      title: "React JS",
      value: "React JS",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>React JS Project</p>
          <div className="text-base antialiased m-4"> Working In Progress, I will add the project soon...</div>
        </div>
      ),
    },
    {
      title: "Node JS",
      value: "Node JS",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Real-time Chat Application</p>
          <div className="text-base antialiased m-4">Working In Progress, I will add the project soon..</div>
        </div>
      ),
    }
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-24">
      <Tabs tabs={tabs} />
    </div>
  );
}
