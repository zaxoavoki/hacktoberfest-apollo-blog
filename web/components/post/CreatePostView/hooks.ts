import { useForm, hasLength } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons';
import { useCreatePostMutation } from 'generated/client';
import { useRouter } from 'next/router';

export const useCreatePost = () => {
  const router = useRouter();
  const [createPost, { loading }] = useCreatePostMutation();

  const form = useForm({
    initialValues: {
      title: '',
      content: '',
    },

    validate: {
      title: hasLength(
        { min: 2, max: 32 },
        'Title must be 2-32 characters long',
      ),
      content: hasLength(
        { max: 1000 },
        'Content can not be longer than 1000 characters',
      ),
    },
  });

  const handleSubmit = async () => {
    const { data, errors } = await createPost({
      variables: {
        input: {
          title: form.values.title,
          content: form.values.content,
        },
      },
    });

    if (data) {
      await router.push('/');

      notifications.show({
        message: 'Post created successfully',
        icon: IconCheck({}),
        color: 'green',
      });
      return;
    }

    if (errors) {
      notifications.show({
        message: errors[0].message,
        color: 'red',
      });
      return;
    }

    return;
  };

  return {
    loading,
    form,
    handleSubmit,
  };
};