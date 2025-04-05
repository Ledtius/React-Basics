import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RedCard } from "./components/App.jsx";
import "./index.css"
const root = createRoot(document.getElementById("root")).render(
  <>
    <RedCard
      title="Amatista"
      image="https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_vwIN-2NP6j155_7ttCW7ve2FFwxz0V2FlKPvFR-yoeZww6qFY-UVk2l07tCgtXtOaIVoaYAeaT_MtIOYzg63b4Hjofvph-SYkxlp5_zLuVg7tDEK4qLi8hVBtpeBJDctEu1KpUZ1oMZf1kaA=w919-h516-p-k-no-nu"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />
    <RedCard
      title="Marik"
      image="https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_sPkGrg5G3vzOx7DbkB_k7B4tgAojLdwXVFMbEmnVnmB04GGSLglJ0vF-1RMq_PUI-SWKRmC5gTixZ5vhZroPp9BJn8Zku1cASXw32Or1YzEQIRs7SIVAi-687YKHMZyC22ycRndwOh-w=w919-h516-p-k-no-nu"
      text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    />
  </>
);
