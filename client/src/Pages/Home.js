import Questions from "./Questions";

function Home({ isLogin, setOnSide }) {
  return isLogin ? <Questions setOnSide={setOnSide}></Questions> : null;
}

export default Home;
