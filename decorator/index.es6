import yeoman from 'yeoman-generator';
import {DecoratorSubGenerator} from '../_ng/sub_generators_decorator';

export default class DecoratorGenerator extends yeoman.generators.Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new DecoratorSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
}
