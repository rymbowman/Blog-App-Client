import { Button } from "@mui/material";
import PropTypes from "prop-types";

const CommentActions = ({
  displayedComments,
  onShowComments,
  onHideComments,
  commentsCount,
}) => {
  return (
    <>
      {!displayedComments ? (
        <Button variant="outlined" onClick={onShowComments}>
          Show comments ({commentsCount})
        </Button>
      ) : (
        <Button variant="outlined" onClick={onHideComments}>
          Hide Comments
        </Button>
      )}
    </>
  );
};

CommentActions.propTypes = {
  displayedComments: PropTypes.bool.isRequired,
  onShowComments: PropTypes.func.isRequired,
  onHideComments: PropTypes.func.isRequired,
  commentsCount: PropTypes.number,
};

export default CommentActions;
