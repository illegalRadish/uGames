import Icon from "../components/Icon";
import Banner from "../assets/banner.svg";
import { featured } from "../../Games";
import "../../node_modules/solid-slider/dist/slider.css";
import { createSlider } from "solid-slider";
import { onMount } from "solid-js";
import GetTitle from "../Title";

export default function Index () {
  const [ slider, { current, next, prev, moveTo } ] = createSlider();
  let oldCurrent = 0;

  onMount(() => {
    document.title = GetTitle();
    setInterval(() => {
      if (oldCurrent !== current()) {
        oldCurrent = current();
        return;
      }
      oldCurrent = current();
      if (current() === featured.length - 1) moveTo(0);
      else next();
    }, 5000);
  });

  function Bubble (props) {
    let onClick = () => {
      moveTo(props.index);
    };
    return <div onClick={onClick} class={ `rounded-full w-2 h-2 m-1 ${current() === props.index ? "bg-neutral-100" : "bg-neutral-500"}` }></div>
  }

  return (
    <div class="bg-gray-900 text-gray-100">
      <main class="py-40 w-full">
        <div class="block mx-auto bg-gray-900 max-w-2xl">
          <div class="flex justify-center p-5">
            <img src={ Banner } alt="Radon Games" class="h-10" />
          </div>
          <p class="text-center p-5">An open-source unblocked games website built with simplicity in mind.</p>

          <div class="flex justify-center p-5">
            <a href="/games" class="flex text-center text-gray-100 bg-sky-500 p-4 hover:bg-sky-400 rounded-full transition-colors shadow-lg">
              <Icon name="gamepad" style="margin-top: 0.3em;" />&nbsp; Start playing!
            </a>
          </div>
        </div>
      </main>

      <h1 class="text-4xl text-center m-5">Featured</h1>
      <section class="flex justify-center">
        <div class="flex flex-col justify-center items-center bg-gray-800 rounded-2xl w-[300px] sm:w-[616px] md:w-[744px] lg:w-[1000px]">
          <div use:slider>

            { featured.map((feature) => {
              return (
                <div class="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div class="flex justify-center flex-col text-base">
                    <h1 class="text-4xl">{ feature.title }</h1>
                    <p class="my-5">{ feature.description }</p>
                    <a href={ feature.url } class="flex w-max text-center text-gray-100 bg-sky-500 p-4 hover:bg-sky-400 rounded-full transition-colors shadow-lg">
                      <Icon name="gamepad" style="margin-top: 0.3em;" />&nbsp; Play Now!
                    </a>
                  </div>
                  <div>
                    <img src={ feature.image } alt={ feature.title } class="rounded-xl" />
                  </div>
                </div>
              )
            }) }
            
          </div>

          <div class="flex mb-5 items-center justify-center">
            { featured.map((feature, index) => {
              return <Bubble index={ index } />
            }) }
          </div>

        </div>
      </section>


    </div>
  );
}
