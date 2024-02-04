import YogaTagsGrid from "./YogaTagsGrid";

export default function YogaTags() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-3 mt-5">
      <YogaTagsGrid text="Intro Yoga" />
      <YogaTagsGrid text="Vinyasa Flow" />
      <div className="row-start-2 col-start-2">
        <YogaTagsGrid text="Yin Yoga" />
      </div>
    </div>
  );
}
