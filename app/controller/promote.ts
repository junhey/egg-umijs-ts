import { Controller } from 'egg';

export default class PromoteController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.renderPage<{ a: string }>({
      title: `promote`,
    });
  }
}
