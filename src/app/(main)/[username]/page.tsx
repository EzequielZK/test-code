import { UserDetailResponse } from "@/lib/types/apiTypes";
import UserSearchView from "@/views/user";
import axios from "axios";
import { notFound } from "next/navigation";

export default async function User({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  try {
    const { username } = await params;

    const response = await axios(`https://api.github.com/users/${username}`);

    const user: UserDetailResponse = {
      name: response.data.name,
      bio: response.data.bio,
      image: response.data.avatar_url,
      email: response.data.email,
      followers: response.data.followers,
      following: response.data.following,
      public_repos: response.data.public_repos,
      login: response.data.login,
      html_url: response.data.html_url,
      created_at: response.data.created_at,
    };
    return <UserSearchView user={user} />;
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.status === 404) {
      notFound();
    }
    throw err;
  }
}
