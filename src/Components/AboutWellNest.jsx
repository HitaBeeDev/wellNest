import backgroundImage3 from "../assets/backgroundImage3.jpg";

export default function AboutWellNest() {
  return (
    <div
      className="bg-cover bg-center bg-color4/80 rounded-3xl lg:p-12 p-10 mb-5 lg:mb-0"
      style={{ backgroundImage: `url(${backgroundImage3})` }}
    >
      <h3 className="text-color6 font-thin text-4xl">About Wellnest</h3>
      <p className="mt-9 text-sm text-color2 leading-loose">
        Welcome to WellNest, your nurturing sanctuary for holistic well-being!
        Dive into personalized yoga, fitness plans, mental wellness therapy, and
        balanced diet advice—all aimed at empowering your journey to harmony.
        More than a wellness center, we're your partners in embracing wellness
        as a joyful way of life.
        <br />
        <br />
        Our approach is about walking alongside you on your unique path,
        celebrating every step forward and offering guidance through the twists
        and turns. Here, wellness isn't just a destination—it's the fabric of
        our community, where your well-being always comes first. Welcome to
        WellNest, where your journey to holistic health and happiness begins
        with open arms and a compassionate heart! Join us as we embark together
        on this transformative adventure towards a more vibrant and fulfilling
        life.
      </p>
    </div>
  );
}
