import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };
  let postWithIdAndDate: Post;

  beforeEach(async () => {
    postsService = new PostsService();

    postWithIdAndDate = postsService.create(post)
  });

  it('should add a new post', () => {
    expect(postsService.find(postWithIdAndDate.id)).toBe(postWithIdAndDate)
  });

  it('should find a post', () => {
    const posts = [{text: 'Mocked post1',}, {text: 'Mocked post2',}, {text: 'Mocked post3',}];
    posts.forEach((el)=>postsService.create(el))
    expect(postsService.find(postWithIdAndDate.id)).toEqual(postWithIdAndDate)
  });
});