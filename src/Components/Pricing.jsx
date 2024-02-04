import PricingMotion from "./PricingMotion";

export default function Pricing() {
  return (
    <div className="mt-28 lg:grid lg:grid-cols-4">
      <div className="hidden lg:grid lg:col-span-3">
        <PricingMotion />
      </div>

      <div className="lg:hidden grid col-span-3">
        <p>
          NORMAL PRICE CARDS Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Beatae rem expedita praesentium perferendis, facilis eum dolorem
          illo aperiam, labore, voluptas a soluta officiis eligendi. Sequi
          ratione nulla praesentium enim sint!
        </p>
      </div>

      <div className="hidden lg:grid lg:col-span-1">
        1111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        distinctio, officia rerum libero incidunt ipsa iure fugiat doloribus,
        deleniti non cumque illum fuga eos aliquid explicabo nostrum quasi hic
        omnis?
      </div>

      <div className="lg:hidden grid col-span-3">
        NORMAL REVIEW CARDS Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Maxime distinctio, officia rerum libero incidunt ipsa iure fugiat
        doloribus, deleniti non cumque illum fuga eos aliquid explicabo nostrum
        quasi hic omnis?
      </div>
    </div>
  );
}
