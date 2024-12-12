import { UserDetailResponse } from "@/lib/types/apiTypes";
import UserSearchView from "@/views/user";
import axios from "axios";

export default async function User({
  params,
}: {
  params: { username: string };
}) {
  const { username } = await params;
  console.log({ username });
  // const response = await axios(`https://api.github.com/users/${username}`);
  const user: UserDetailResponse = {
    // name: response.data.name,
    // bio: response.data.bio,
    // image: response.data.avatar_url,
    //     email:response.data.email,
    // followers: response.data.followers,
    // following: response.data.following,
    name: "Ezequiel",
    bio: "Minha Bio",
    email: "exemplo@email.com",
    followers: 1,
    following: 0,
  };
  return <UserSearchView user={user} />;
}