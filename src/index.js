export default function({ types: t }) {
  return {
    visitor: {
      MemberExpression(path) {
        let parent = path.parentPath;

        if (parent.isVariableDeclarator()) {
          path.replaceWithSourceString('function(){}');
        }
      },
      CallExpression(path, state) {
        let callee = path.get('callee');
        let object = callee.node.object;

        if (object && object.name === 'console') {
          let property = callee.node.property;

          if (property && property.name === 'log') {
            let parent = path.parentPath;

            if (parent.isConditionalExpression()) {
              path.replaceWithSourceString('void(0)');
            } else {
              path.remove();
            }
          }
        }
      }
    }
  };
}
