import heroBackgroundImg from '../../assets/home_hero_banner.jpg'
import { SectionContent } from '../../components/section/SectionContent';
import { SectionCover } from '../../components/section/SectionCover';

export const HomePage = () => (
  <main>
    {/* Hero Section */}
    <header
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          `url(${heroBackgroundImg})`,
      }}
    >
      <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Explore the World
        </h1>
        <p className="text-xl md:text-2xl font-light">
          Your journey begins here. Scroll to see the navbar effect.
        </p>
      </div>
    </header>

    {/* Content Section */}
    <SectionContent>
      <div className="max-w-4xl mx-auto text-gray-300">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Our Content Section
        </h2>
        <p className="mb-6 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p className="text-lg leading-relaxed">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Curabitur pretium
          tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et
          commodo pharetra, est eros bibendum elit, nec luctus magna felis
          sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis
          ac tellus et risus vulputate vehicula.
        </p>
      </div>
    </SectionContent>

    <SectionCover backgroundImage="https://placehold.co/1200x400/1a202c/4a5568?text=Another+Section"
    >
      {/* Parallax-like section */}
    </SectionCover>

    <SectionContent>
      <div className="max-w-4xl mx-auto text-gray-300">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          More to Discover
        </h2>
        <p className="mb-6 text-lg leading-relaxed">
          Phasellus et nisl quis enim dignissim suscipit. Sed pellentesque,
          dolor sit amet elementum iaculis, dolor sem sodales ante, vel posuere
          sapien magna sed purus. Mauris non enim quis est aliquet fringilla.
          Phasellus eget sodales nulla. Vivamus et quam nec velit bibendum
          ullamcorper.
        </p>
        <p className="text-lg leading-relaxed">
          Nunc nec est nec turpis laoreet laoreet. Duis sed dolor et nulla
          dignissim egestas. Pellentesque nec nisl in quam tristique tristique.
          Nam at dolor eu tortor pellentesque porttitor. Cras consequat, sem
          quis aliquam tempor, lorem nisl eleifend dolor, eget faucibus justo
          massa in justo.
        </p>
      </div>
    </SectionContent>
  </main>
);
