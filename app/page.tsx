import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src="/headshot.jpg"
        alt="Daniel Romanini de Barros"
        width={224}
        height={224}
        preload
        className="size-44 rounded-full object-cover ring-4 ring-accent sm:size-56"
      />
      <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
        Hey, I&apos;m <span className="text-accent">Daniel</span>!
      </h1>
      <p className="mt-4 text-xl font-medium text-foreground/90 sm:text-2xl">
        Computer Science Student at UCF
      </p>
      <p className="mt-4 max-w-xl text-lg leading-8 text-foreground/60">
        I’m Daniel. I study Computer Science at UCF and work at Lockheed Martin. The rest of my time goes to side projects, jiu-jitsu, and skiing.
      </p>
    </div>
  );
}
