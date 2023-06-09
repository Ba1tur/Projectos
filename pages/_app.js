import Layouts from "@/components/Layouts/Layouts";
import Preloader from "@/components/Preloader/Preloader";
import "@/styles/globals.css";
import "@/styles/courseSwiper.css";
import "@/styles/reviewsSwiper.css";
import "@/styles/workSwiper.css";

export default function App({ Component, pageProps }) {
  return (
    <Layouts>
      <Preloader />
      <Component {...pageProps} />
    </Layouts>
  );
}
