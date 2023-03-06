import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { z } from "zod";

export const schema = z.array(
  z.object({
    login: z.string(),
    id: z.number(),
    node_id: z.string(),
    avatar_url: z.string(),
    gravatar_id: z.string(),
    url: z.string(),
    html_url: z.string(),
    followers_url: z.string(),
    following_url: z.string(),
    gists_url: z.string(),
    starred_url: z.string(),
    subscriptions_url: z.string(),
    organizations_url: z.string(),
    repos_url: z.string(),
    events_url: z.string(),
    received_events_url: z.string(),
    type: z.string(),
    site_admin: z.boolean(),
  })
);

export const useUsers = () => {
  return useQuery({ queryKey: ["users"], queryFn: getUsers });
};

const getUsers = async () => {
  const response = await axios.get("https://api.github.com/users");

  return schema.parse(response.data);
};
