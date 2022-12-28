import Questions from "./Questions";

function Home({ isLogin }) {
  return isLogin ? <Questions></Questions> : null;
}

export default Home;
