import file from "../../documents/Melissa Rose CV.pdf"

export const portals: {
  name: "todo-app" | "restaurant" | "playlist-converter" | "pokemon-top-trumps";
  x: number;
  z: number;
}[] = [
  { name: "todo-app", x: 800, z: -300 },
  { name: "restaurant", x: 800, z: -100 },
  { name: "playlist-converter", x: 800, z: 100 },
  { name: "pokemon-top-trumps", x: 800, z: 300 },
];

export const links: { name: string; url: string; x: number; z: number }[] = [
  { name: "GitHub", url: "https://github.com/rosemelissa", x: 750, z: 400 },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/melissa-rose123/",
    x: 640,
    z: 400,
  },
  { name: "CV", url: file, x: 530, z: 400 },
  {
    name: "Creative Coding",
    url: "https://openprocessing.org/user/334099?view=sketches&o=40",
    x: 420,
    z: 400,
  },
];
