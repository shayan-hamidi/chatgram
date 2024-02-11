"use client";

import { useState } from "react";
import Avatar from "./LoginPage/Avatar";

export default function Form() {
  const [avatarId, setAvatarId] = useState((Math.random() * 20).toFixed());
  return (
    <form className="flex flex-col gap-5">
      <Avatar avatarId={avatarId} setAvatarId={setAvatarId} />
      <div className="flex flex-col xl:flex-row gap-5">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="UserName"
            name="userName"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg">Put your email.</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered w-full"
            required
          />
        </div>
      </div>
    </form>
  );
}