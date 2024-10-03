import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create(post)
  });

  it('should add a new post', () => {
    expect(postsService.find('1')!.text).toEqual(post.text)
  });

  it('should find a post', () => {
    const newPost = postsService.create(post);
    expect(postsService.find(newPost.id)).toMatchObject({
      id: newPost.id,
      text: "Mocked post",
      date: expect.any(String),
    });
  });
});