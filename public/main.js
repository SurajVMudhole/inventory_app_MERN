function productDelete(id) {
  const result = confirm("Are you sure you want to delete ?");
  if (result) {
    fetch("/delete_product/" + id, { method: "post" }).then((res) => {
      if (res.OK) {
        location.reload();
      }
    });
  }
}
