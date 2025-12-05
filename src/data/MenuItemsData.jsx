const unsubscribe = onSnapshot(ref, (snapshot) => {
  let firestoreList = snapshot.docs.map(d => {
    const data = d.data();

    // Find matching local item (using name)
    const localItem = MenuItemsData.find(i => i.name === data.name);

    return {
      id: d.id,
      name: data.name ?? localItem?.name,
      price: data.price ?? localItem?.price,
      description: data.description ?? localItem?.description,
      available: data.available ?? true,
      deleted: data.deleted ?? false,
      image: data.image ?? localItem?.image, // 🔥 FIX image problem
    };
  });

  setMenuItems(firestoreList);
  localStorage.setItem("menuItems", JSON.stringify(firestoreList));
});
