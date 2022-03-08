/**
 * let arr = [
 *     {id: 1, name: '部门1', pid: 0},
 *     {id: 2, name: '部门2', pid: 1},
 *     {id: 3, name: '部门3', pid: 1},
 *     {id: 4, name: '部门4', pid: 3},
 *     {id: 5, name: '部门5', pid: 4},
 * ]
 *
 * 输出：
 * [
 *     {
 *         "id": 1,
 *         "name": "部门1",
 *         "pid": 0,
 *         "children": [
 *             {
 *                 "id": 2,
 *                 "name": "部门2",
 *                 "pid": 1,
 *                 "children": []
 *             },
 *             {
 *                 "id": 3,
 *                 "name": "部门3",
 *                 "pid": 1,
 *                 "children": [
 *                     // 结果 ,,,
 *                 ]
 *             }
 *         ]
 *     }
 * ]
 */

// 题目来源：https://juejin.cn/post/6983904373508145189

const genTree = (source, pid, result = []) => {
    source.forEach(item => {
        if(item.pid === pid) {
            const child = {
                ...item,
                children: []
            };
            result.push(child);
            genTree(source, child.id, child.children);
        }
    });

    return result;
}

export default genTree;
