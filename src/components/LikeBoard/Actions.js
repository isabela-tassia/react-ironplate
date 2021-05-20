import React from "react";
import Rewind from "./actions/Rewind";
import Dislike from "./actions/Dislike";
import Like from "./actions/Like";
import Superlike from "./actions/SuperLike";

const Actions = ({ person, modifySuperficialChoices }) => (
  <div id="actions">
    <Rewind userId={person._id} />
    <Dislike
      userId={person._id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
    <Like
      userId={person._id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
    <Superlike
      userId={person._id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
  </div>
);

export default Actions;
