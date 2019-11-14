export interface IComment {
  text: string;
  flow: 'scroll' | 'static';
  position: 'top' | 'bottom';
  font: string;
  x: number;
  y: number;
}

export class CommentCreator {
  commentList: Array<IComment> = [];
  $canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  public constructor(x: number, y: number) {
    this.$canvas = document.createElement('canvas') as HTMLCanvasElement;
    const ctx = this.$canvas.getContext('2d');
    if (ctx == null) throw new Error('notfound ctx');
    this.ctx = ctx;
    this.$canvas.width = x;
    this.$canvas.height = y;
  }

  public resize(x: number, y: number) {
    this.$canvas.width = x;
    this.$canvas.height = y;
	}

  next(offset: number) {
    for (let i = 0; i < this.commentList.length; i++) {
      switch (this.commentList[i].flow) {
        case 'scroll':
        this.commentList[i].x += offset;
        break;
        default:
        break;
      }
    }
  }
}

