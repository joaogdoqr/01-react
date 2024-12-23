import { z } from "zod";

const avatarPropsSchema = z.object({
  src: z.string().url(),
  alt: z.string().min(1),
  hasBorder: z.boolean().optional().default(true),
});

type AvatarProps = z.infer<typeof avatarPropsSchema>;

export const Avatar = (props: AvatarProps) => {
  const validatedProps = avatarPropsSchema.parse(props);

  return (
    //className="w-12 h-12 rounded-lg border-4 border-gray-800 outline outline-2 outline-green-500 box-content"
    <img
      className={`w-12 h-12 rounded-lg border-4 border-gray-800 box-content ${
        validatedProps.hasBorder ? "outline outline-1 outline-green-500" : ""
      }`}
      src={validatedProps.src}
      alt={validatedProps.alt}
    />
  );
};
