import React from "react";
import { ReactScreenshotTest } from "react-screenshot-test";

import { Button } from "./Button";

describe("screenshots", () => {
  ReactScreenshotTest.create("FancyButton")
    .viewport("Desktop", {
      width: 1024,
      height: 768,
    })
    .viewport("iPhone X", {
      width: 375,
      height: 812,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false,
    })
    .shoot("with label", <Button>With text</Button>)
    .shoot("empty label", <Button />)
    .shoot(
      "custom label",
      <Button>
        <span style={{ background: "red" }}>Red label</span>
      </Button>
    )
    .run();
});
