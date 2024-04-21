import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center gap-4 flex-col text-white h-[40vh] items-center">
        <div className="font-bold flex justify-center items-center gap-2 text-5xl">
          Buy me a Coffee <span ><img src="/coffee.gif" width={44} alt="" /></span>
        </div>
        <p>A crowdfunding platform for creators to fund their project</p>
        <p>A place where your fans can buy you a coffee. Unleash the power of your fans and get your projects funded</p>
        <div>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start now</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10">

      </div>
      <div className="text-white container mx-auto my-8">
        <h1 className="text-2xl font-bold text-center my-10">Your Fans can buy you a coffee</h1>
        <div className="flex justify-around gap-4">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2" src="/man.png" width={88} alt="" />
            <p className="font-bold ">Fans want to help</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2" src="/coin.png" width={88} alt="" />
            <p className="font-bold ">Fans want to contribute</p>
            <p className="text-center">Your fans are willing to contribute financially</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2" src="/group.png" width={88} alt="" />
            <p className="font-bold ">Fans want to collaborate</p>
            <p className="text-center">Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10">

      </div>
      <div className="text-white container mx-auto pb-14">
        <h1 className="text-2xl font-bold text-center my-10">Some motivation to learn any new technologies</h1>
        <div className="flex justify-around gap-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cDvFLtnK0zw?si=xpa1swdoUWJEh-AL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}
