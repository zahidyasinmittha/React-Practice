import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
//   let [data, setdata] = useState([]);
//   useEffect(() => {
//     const token = "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";
//     fetch("https://api.github.com/user", {
//       headers: {
//         Authorization: `token ${token}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setdata(data));
//   }, []);


    let data = useLoaderData();
  return (
    <div className="flex text-6xl font-extrabold justify-center m-10">
        <img src={data.avatar_url} alt="" className="rounded-xl mx-4 h-52" />
      <div className=" ">Github Follower: {data.followers} </div>
    </div>
  );
}

export default Github;

export async function githubdata(){
    const token = "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";
    let data =await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `token ${token}`,
        }
    })
    return data.json()
}
