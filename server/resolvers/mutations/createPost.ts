import { MutationResolvers } from '../../../generated/server';
import { checkUserPermissionsOrThrow } from '../../lib/utils';
import { prisma } from '../../prisma';

export const createPost: MutationResolvers['createPost'] = async (
  _,
  { input },
  { user },
) => {
  checkUserPermissionsOrThrow(user);

  const { title, images, content, previewImage } = input;
  return prisma.post.create({
    data: {
      title,
      content,
      previewImage,
      isDraft: true,
      userId: user.id,
      images: images || [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
};
