import React from "react";
import * as S from "../Hearder/StyleHearder";

export default function Header() {
  return (
    <>
      <S.Header>
        <div>
          <h1>RC</h1>
          <section>
            <ul>
              <li>About</li>
              <li>Recipes</li>
            </ul>
            <button>subscribe</button>
          </section>
        </div>
        <div>
          <h2>Recipes</h2>
        </div>
      </S.Header>
    </>
  );
}
