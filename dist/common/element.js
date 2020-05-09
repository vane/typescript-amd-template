define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createElement = function (name, attrs, parent) {
        var d = document.createElement(name);
        if (attrs) {
            for (var val in attrs) {
                d.setAttribute(val, attrs[val]);
            }
        }
        if (parent) {
            parent.appendChild(d);
        }
        return d;
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vZWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBYSxRQUFBLGFBQWEsR0FBRyxVQUFDLElBQVksRUFBRSxLQUFpQyxFQUFFLE1BQW9CO1FBQy9GLElBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBRyxLQUFLLEVBQUU7WUFDTixLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRTtnQkFDbkIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDbkM7U0FDSjtRQUNELElBQUcsTUFBTSxFQUFFO1lBQ1AsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAobmFtZTogc3RyaW5nLCBhdHRycz86IHsgW2tleTpzdHJpbmddOiBzdHJpbmc7IH0sIHBhcmVudD86IEhUTUxFbGVtZW50KTpIVE1MRWxlbWVudCA9PiB7XG4gICAgY29uc3QgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG4gICAgaWYoYXR0cnMpIHtcbiAgICAgICAgZm9yIChsZXQgdmFsIGluIGF0dHJzKSB7XG4gICAgICAgICAgICBkLnNldEF0dHJpYnV0ZSh2YWwsIGF0dHJzW3ZhbF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZCk7XG4gICAgfVxuICAgIHJldHVybiBkO1xufVxuIl19