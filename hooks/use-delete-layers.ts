import { useSelf, useMutation } from "@/liveblocks.config";

export const useDeleteLayers = () => {
  const selection = useSelf((me) => me.presence.selection);

  const deleteLayers = useMutation(
    ({ storage, setMyPresence }) => {
      const liveLayers = storage.get("layers");
      const liveLayersIds = storage.get("layerIds");

      for (const id of selection) {
        liveLayers.delete(id);
        const index = liveLayersIds.indexOf(id);

        if (index !== -1) {
          liveLayersIds.delete(index);
        }
      }

      setMyPresence({ selection: [] }, { addToHistory: true });
    },
    [selection]
  );

  return deleteLayers;
};
