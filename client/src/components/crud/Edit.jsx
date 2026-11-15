import PostModal from "../PostModal"

function EditPost({ item, onClose, onSubmit }) {
  return (
    <PostModal
      modalTitle="Edit News / Announcement"
      operation="Update"
      initialData={item}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  )
}

export default EditPost