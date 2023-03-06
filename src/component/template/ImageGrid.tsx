import { ReactComponent as Close } from "assets/icon/close.svg";

type Props = {
  list: string[];
  removeImage: (id: number) => void;
};

const numColumns = ["grid-cols-1", "grid-cols-2", "grid-cols-3"];

function ImageGrid({ list, removeImage }: Props) {
  return (
    <>
      <div
        className={`grid grid-flow-row ${
          list.length > 3 ? "grid-cols-4" : numColumns[list.length - 1]
        } gap-1 w-full`}
      >
        {list.map((item, id) => (
          <div
            className="rounded-[22px] relative max-w-[182px] max-h-[241px]"
            key={id}
          >
            <div className="absolute top-1 right-1">
              <div
                className="bg-white rounded-full h-[20px] w-[20px] cursor-pointer justify-center items-center flex"
                onClick={() => removeImage(id)}
              >
                <Close className="text-red" />
              </div>
            </div>
            <img
              src={item}
              alt="Screenshot"
              className="w-full min-h-full rounded-[12px]"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ImageGrid;
