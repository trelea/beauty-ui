import React from "react";
import { useDropzone } from "react-dropzone";
import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface Props {
  form: UseFormReturn<any>;
  image?: string;
}

export const UploadThumbanil: React.FC<Props> = ({ form, image }) => {
  const { t } = useTranslation();
  const [preview, setPreview] = React.useState<string | ArrayBuffer | null>(
    image ? image : ""
  );
  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      const reader = new FileReader();
      try {
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(acceptedFiles[0]);
        form.setValue("thumbnail", acceptedFiles[0]);
        form.clearErrors("thumbnail");
      } catch (error) {
        setPreview(null);
        form.resetField("thumbnail");
      }
    },
    [form]
  );
  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      maxSize: 1000 * 1000,
      accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
    });

  return (
    <FormField
      control={form.control}
      name="thumbnail"
      render={() => (
        <FormItem>
          <FormControl>
            <div
              {...getRootProps()}
              className="p-1 flex justify-center items-center flex-col border rounded-lg py-2 px-6 text-[#505050] text-base font-light border-zinc-300 hover:border-black"
            >
              {preview && (
                <img
                  src={preview as string}
                  alt="Uploaded image"
                  className="w-36 rounded-lg"
                />
              )}
              <Input {...getInputProps()} type="file" />
              {isDragActive ? (
                <p>{t("adminMasters.form.dropImg")}</p>
              ) : (
                <p>{t("adminMasters.form.dragImg")}</p>
              )}
            </div>
          </FormControl>
          <FormMessage className="text-xs">
            {fileRejections.length !== 0 && (
              <p>{t("adminMasters.form.rejectImg")}</p>
            )}
          </FormMessage>
        </FormItem>
      )}
    />
  );
};
