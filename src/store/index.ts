import create from 'zustand';

import dataMock from 'mocks';

type StateType = {
  readItemIds: number[];
  addToRead: (id: number) => void;
  getReadItemsNumber: () => void;
  removeFromRead: (id: number) => void;
  checkIsRead: (id: number) => boolean;
};

const useStore = create<StateType>((set, get) => ({
  readItemIds: dataMock.filter(({ is_unread }) => !is_unread).map(({ id }) => id),
  addToRead: (id: number) => set((state) => ({ readItemIds: [...state.readItemIds, id] })),
  checkIsRead: (id: number) => {
    const readItemIds = get().readItemIds;

    return readItemIds.includes(id);
  },
  getReadItemsNumber: () => get().readItemIds.length,
  removeFromRead: (id: number) =>
    set((state) => {
      const itemIndex = state.readItemIds.indexOf(id);
      const updateReadItemIds = [...state.readItemIds];
      updateReadItemIds.splice(itemIndex, 1);
      return {
        readItemIds: updateReadItemIds
      };
    })
}));

export default useStore;
