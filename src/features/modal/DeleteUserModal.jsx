import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./modalSlice";
import { selectModal } from "./modalSelectors";
import { useDeleteUserMutation } from "../../app/api";
import { enqueueSnackbar } from "notistack";

const DeleteUserModal = ({ refetchUsers, user }) => {
  const { id, firstName, lastName } = user;
  const dispatch = useDispatch();
  const { isOpen } = useSelector(selectModal);
  const [deleteUser] = useDeleteUserMutation();

  const handleCancel = () => {
    dispatch(closeModal());
  };
  const handleOk = async () => {
    try {
      await deleteUser(id);
      refetchUsers();
      dispatch(closeModal());
      enqueueSnackbar("User has been deleted successfully!", {
        variant: "success",
      });
    } catch (error) {
      console.error("Error deleting user:", error);
      enqueueSnackbar("Something went wrong", {
        variant: "error",
      });
    }
  };
  return (
    <Modal
      title="Delete User"
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Delete"
      okButtonProps={{ danger: true }}
      cancelText="Cancel"
    >
      <p>
        You are about to delete {firstName} {lastName}
      </p>
    </Modal>
  );
};

export default DeleteUserModal;
