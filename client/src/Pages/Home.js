import Questions from "./Questions";

function Home({ isLogin }) {
  return isLogin ? <Questions /> : null;
}

export default Home;
