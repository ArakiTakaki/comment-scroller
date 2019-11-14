
export interface IComment {
  text: string;
  font: string;
  x: number;
  y: number;
}

export class CommentCanvasRenderer { 
  $canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  public constructor(x: number, y: number) {
    this.$canvas = document.createElement('canvas') as HTMLCanvasElement;
    const ctx = this.$canvas.getContext('2d') 
    if (ctx == null) throw new Error('notfound ctx');
    this.ctx = ctx;
    this.resize(x, y);
  }

  public commentRender(comment: Array<IComment>) {
    if (this.$canvas == null) throw new Error('canvas element not found');
    this.ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height);

    comment.forEach(({text, x, y, font}) => {
      this.ctx.font = font;
      this.ctx.fillText(text, x, y);
    });
  }
  
  public resize(x: number, y: number) {
    this.$canvas.width = x;
    this.$canvas.height = y;
	}

  public render(el: HTMLElement) {
    if (this.$canvas == null) throw new Error('canvas element not found');
    this.ctx.clearRect(0,0, this.$canvas.width, this.$canvas.height);
    el.appendChild(this.$canvas);
  }

  public destroy() {
    this.$canvas.remove();
  }
}

