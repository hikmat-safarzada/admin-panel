import PostModal from "../PostModal"

function CreatePost({ item, onClose, onSubmit }) {
  return (
    <PostModal
      modalTitle="Add News / Announcement"
      operation="Add"
      onClose={onClose}
      onSubmit={onSubmit}
    />
  )
}

export default CreatePost