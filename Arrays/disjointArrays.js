function computeDisjoint(a, b) {
    for(let i=0; i<a.length; i++) {
        if(b.indexOf(a[i])!=-1)
            return 'Joint';
    }
    return 'DisJoint';
}